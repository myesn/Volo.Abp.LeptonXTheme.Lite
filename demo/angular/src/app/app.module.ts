import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "@abp/ng.core";
import { registerLocale } from "@abp/ng.core/locale";
import { ThemeSharedModule } from "@abp/ng.theme.shared";
import { IdentityConfigModule } from "@abp/ng.identity/config";
import { AbpOAuthModule } from "@abp/ng.oauth";
import { AccountConfigModule } from "@abp/ng.account/config";
import { SettingManagementConfigModule } from "@abp/ng.setting-management/config";
import { TenantManagementConfigModule } from "@abp/ng.tenant-management/config";
import { ThemeLeptonXModule } from "@abp/ng.theme.lepton-x";
import { SideMenuLayoutModule } from "@abp/ng.theme.lepton-x/layouts";
import { environment } from "../environments/environment";
import { APP_ROUTE_PROVIDER } from "./route.provider";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccountLayoutModule } from "@abp/ng.theme.lepton-x/account"

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    AbpOAuthModule.forRoot(),
    ThemeSharedModule.forRoot(),
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    ThemeLeptonXModule.forRoot({
      styleFactory: (styles) => {
        return styles;
      },
    }),
    SideMenuLayoutModule.forRoot(),
    AccountLayoutModule.forRoot(),
  ],
  declarations: [AppComponent],
  providers: [APP_ROUTE_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
