import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-modal-add-player',
    imports: [
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
    ],
    templateUrl: './modal-add-player.component.html',
    styleUrl: './modal-add-player.component.scss'
})

export class ModalAddPlayerComponent {
    name: string = '';

    constructor(private dialogRef: MatDialogRef<ModalAddPlayerComponent>) { }

    closeModal(): void {
        this.dialogRef.close();
    }
}
