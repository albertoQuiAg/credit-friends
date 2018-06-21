import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatToolbarModule, MatDividerModule, MatSnackBarModule, MatMenuModule, MatDialogModule, MatRadioModule, MatListModule, MatBadgeModule, MatProgressSpinnerModule } from '@angular/material';


@NgModule({
    imports: [ 
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatDividerModule,
        MatSnackBarModule,
        MatMenuModule,
        MatDialogModule,
        MatRadioModule,
        MatListModule,
        MatBadgeModule,
        MatProgressSpinnerModule
    ],
    declarations: [ ],
    exports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatDividerModule,
        MatSnackBarModule,
        MatMenuModule,
        MatDialogModule,
        MatRadioModule,
        MatListModule,
        MatBadgeModule,
        MatProgressSpinnerModule
    ],
    entryComponents: [ ],
    providers: [ ]
})

export class SharedModule { }