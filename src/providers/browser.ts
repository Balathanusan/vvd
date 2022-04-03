export const browserDBInstance = (db) => {
  return {
    executeSql: (sql, binds) => {
      let query = sql;
      if (binds) {
        binds.forEach((val, index) => {
          query = query.replace("?", binds[index]);
        });
      }
      return new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(query, [], (tx, rs) => {
            resolve(rs);
          });
        });
      });
    },
    sqlBatch: (arr) => {
      return new Promise((r, rr) => {
        let batch = [];
        db.transaction((tx) => {
          for (let i = 0; i < arr.length; i++) {
            batch.push(
              new Promise((resolve, reject) => {
                tx.executeSql(arr[i], [], () => {
                  resolve(true);
                });
              })
            );
            Promise.all(batch).then(() => r(true));
          }
        });
      });
    },
  };
};
