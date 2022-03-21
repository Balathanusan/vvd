import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'refine',
    loadChildren: () => import('./refine/refine.module').then( m => m.RefinePageModule)
  },
  {
    path: 'chef-detail',
    loadChildren: () => import('./chef-detail/chef-detail.module').then( m => m.ChefDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'online-menu',
    loadChildren: () => import('./online-menu/online-menu.module').then( m => m.OnlineMenuPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'coupon',
    loadChildren: () => import('./coupon/coupon.module').then( m => m.CouponPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'shipping',
    loadChildren: () => import('./shipping/shipping.module').then( m => m.ShippingPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'confirm-order',
    loadChildren: () => import('./confirm-order/confirm-order.module').then( m => m.ConfirmOrderPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'order-confirmed',
    loadChildren: () => import('./order-confirmed/order-confirmed.module').then( m => m.OrderConfirmedPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'rate-restro',
    loadChildren: () => import('./rate-restro/rate-restro.module').then( m => m.RateRestroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'track-order',
    loadChildren: () => import('./track-order/track-order.module').then( m => m.TrackOrderPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-details',
    loadChildren: () => import('./my-details/my-details.module').then( m => m.MyDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then( m => m.AddAddressPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'favorited',
    loadChildren: () => import('./favorited/favorited.module').then( m => m.FavoritedPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'title',
    loadChildren: () => import('./title/title.module').then( m => m.TitlePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },
  {
    path: 'subcategory',
    loadChildren: () => import('./subcategory/subcategory.module').then( m => m.SubcategoryPageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'addaddress',
    loadChildren: () => import('./addaddress/addaddress.module').then( m => m.AddaddressPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'googlesearch',
    loadChildren: () => import('./googlesearch/googlesearch.module').then( m => m.GooglesearchPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'topsearch',
    loadChildren: () => import('./topsearch/topsearch.module').then( m => m.TopsearchPageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'myorder-detail',
    loadChildren: () => import('./myorder-detail/myorder-detail.module').then( m => m.MyorderDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usercreation',
    loadChildren: () => import('./usercreation/usercreation.module').then( m => m.UsercreationPageModule)
  },
  {
    path: 'usercreation',
    loadChildren: () => import('./usercreation/usercreation.module').then( m => m.UsercreationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'productlist',
    loadChildren: () => import('./productlist/productlist.module').then( m => m.ProductlistPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
