import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-modal-add-player',
    imports: [
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        CommonModule
    ],
    templateUrl: './modal-add-player.component.html',
    styleUrls: ['./modal-add-player.component.scss']
})

export class ModalAddPlayerComponent {
    avatars: string[] = ['av-1', 'av-2', 'av-3', 'av-4', 'av-5', 'av-6'];
    selectedAvatar: string = '';
    avatar: string = '';
    colors: string[] = ['#ffbbef', '#bac7ff', '#7fe6ef', '#c7ffb9', '#ffffb9', '#ffcab7'];
    selectedColor: string = '';
    color: string = '';
    name: string = '';

    constructor(private dialogRef: MatDialogRef<ModalAddPlayerComponent>) { }

    closeModal(): void {
        this.dialogRef.close();
    }

    addPlayer(): void {
        if (this.name.length > 0) {
            this.dialogRef.close({ name: this.name, color: this.color, avatar: this.avatar });
        }
    }

    selectAvatar(avatar: string): void {
        this.avatar = avatar;
        this.selectedAvatar = avatar;
        console.log('Selected avatar:', avatar);
    }

    selectColor(color: string): void {
        this.color = color;
        this.selectedColor = color;
        console.log('Selected color:', color);
    }
};
