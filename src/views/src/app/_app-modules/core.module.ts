import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditFriendsService } from 'src/app/_services/credit-friends.service';
import { RouterGuardService } from '../_services/router-guard.service';


@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        CreditFriendsService,
        RouterGuardService
    ]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if(parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule
        }
    }
}