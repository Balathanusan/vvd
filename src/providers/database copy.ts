import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";


@Injectable()
export class DatabaseProvider {
    private dbName = 'vvd.db';
    public ProductCart = 'cartDb';

    public databaseObj: SQLiteObject;
    public table = this.ProductCart;
    public data = [];

    constructor(public http: HttpClient, public sqlite: SQLite) {

    }

    createDatabase() {
    
        this.sqlite.create({
            name: this.dbName,
            location: 'default'
        })
            .then((db: SQLiteObject) => {
             
                this.databaseObj = db;
                 this.databaseObj.executeSql(`create table ${this.table} (id int,loggedUserid text null,itemQuantity int null,filterParams BLOB)`, [])
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e));

            })
            .catch(e => {
                console.log("error " + JSON.stringify(e));
               
            });
    }

    public insertRecordRow(data) {
        let insert = `INSERT INTO ${this.table} (id,loggedUserid,itemQuantity) VALUES(?,?,?)`;
        this.databaseObj.executeSql(insert,
            [data.id,

            data.loggeduserid,

            data.itemQuantity])
            .then((res) => {
                console.log("insertres" + JSON.stringify(res));
                console.log("Row Inserted!");
            })
            .catch(e => {
                console.log(data);
                console.log("error" + JSON.stringify(e))
            });
    }

    public deleteRecordRow(id) {
        let deleteRow = `DELETE FROM ${this.table} WHERE id=?`;
        this.databaseObj.executeSql(deleteRow, [id])
            .then((res) => {
                console.log("Row Deleted!", id);
            })
            .catch(e => {
                console.log("error " + JSON.stringify(e))
            });
    }

    public deleteAllRecordRid(loggedUserid) {
        let deleteRow = `DELETE FROM ${this.table} WHERE loggedUserid=?`;
        this.databaseObj.executeSql(deleteRow, [loggedUserid])
            .then((res) => {
                console.log("Row Deleted!", loggedUserid);
            })
            .catch(e => {
                console.log("error " + JSON.stringify(e))
            });
    }

    public deleteAll() {
        let deleteRow = `DELETE FROM ${this.table}`;
        this.databaseObj.executeSql(deleteRow)
            .then((res) => {
                console.log("All Deleted!");
            })
            .catch(e => {
                console.log("error " + JSON.stringify(e))
            });
    }



    public updateRecordRow(id, loggedUserid, itemq) {
        let data = [itemq];
        return this.databaseObj.executeSql(`UPDATE  ${this.table} SET itemQuantity = ? WHERE id = ${id} and loggedUserid = ${loggedUserid}`, data).then(data => {
        });
       
    }

    public getItemCount(loggeduserid) {
        let select = `SELECT count(*) AS result FROM ${this.table}  WHERE  loggedUserid=?`;
        return new Observable((observer) => {
            this.databaseObj.executeSql(select, [loggeduserid])
                .then((res) => {
                    observer.next(res);
                })
                .catch(e => {
                    observer.error('error');
                });
        });
    }

    public getRowCount(id, loggeduserid) {
        let select = `SELECT count(*) AS result FROM ${this.table}  WHERE id=? and loggedUserid=?`;
        return new Observable((observer) => {
            this.databaseObj.executeSql(select, [id, loggeduserid])
                .then((res) => {
                    observer.next(res);
                })
                .catch(e => {
                    observer.error('error');
                });
        });
    }

    getRecordByID(loggedUserid, id) {
        let data = [];
        let select;
        let binds = [];

        if (loggedUserid) {
            select = `SELECT * FROM ${this.table}  WHERE id=?  and loggedUserid=? limit 1`;
            binds = [id, loggedUserid]
        }
        console.log(select);
        console.log(binds);

        return new Observable((observer) => {
            this.databaseObj.executeSql(select, binds)
                .then((res) => {
                    if (res.rows.length > 0) {
                        for (let i = 0; i < res.rows.length; i++) {
                            data.push(res.rows.item(i));
                        }
                    }
                    observer.next(data);
                })
                .catch(e => {
                    console.log("error " + JSON.stringify(e));
                    observer.error([])
                });
        });
    };

    getRecordByProductID(id) {
        let data = [];
        let select;
        let binds = [];

        if (id) {
            select = `SELECT * FROM ${this.table}  WHERE id=? limit 1`;
            binds = [id]
        }
        console.log(id);
        console.log(binds);

        return new Observable((observer) => {
            this.databaseObj.executeSql(select, binds)
                .then((res) => {
                    if (res.rows.length > 0) {
                        for (let i = 0; i < res.rows.length; i++) {
                            data.push(res.rows.item(i));
                        }
                    }
                    observer.next(data);
                })
                .catch(e => {
                    console.log("error " + JSON.stringify(e));
                    observer.error([])
                });
        });
    };

    getAllrecords(id) {
        let data = [];
        let select;
        let binds = [];
        if (id) {
            select = `SELECT * FROM ${this.table}  WHERE loggedUserid=? `;
            binds = [id]
        }
        console.log(select);
        return new Promise((resolve, reject) => {
            this.databaseObj.executeSql(select, binds)
                .then((res) => {
                    if (res.rows.length > 0) {
                        for (let i = 0; i < res.rows.length; i++) {
                            data.push(res.rows.item(i));
                        }
                    }

                    console.log("dbdata" + data);
                    resolve(data);
                })
                .catch(e => {
                    console.log("error " + JSON.stringify(e));
                    resolve(data);
                });
        });
    };


    public insertSelectedFilterIDs(id,selectedIDs) {
        let insert = `INSERT INTO ${this.table} (loggedUserid,filterParams) VALUES(?,?)`;
        this.databaseObj.executeSql(insert,
            [id,
                selectedIDs ])
            .then((res) => {
                console.log("insertres" + JSON.stringify(res));
                console.log("Row Inserted!");
            })
            .catch(e => {
                console.log("error" + JSON.stringify(e))
            });
    }

    public getSelectedFilterIds(loggeduserid) {
        let select = `SELECT filterParams FROM ${this.table}  WHERE  loggedUserid=?`;
        return new Observable((observer) => {
            this.databaseObj.executeSql(select, [loggeduserid])
                .then((res) => {
                    observer.next(res);
                })
                .catch(e => {
                    observer.error('error');
                });
        });
    }
}