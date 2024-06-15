import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
    selector: "app-dialog-add-player",
    standalone: true,
    imports: [
        MatDialogModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        MatInputModule,
        MatFormFieldModule,
    ],
    templateUrl: "./dialog-add-player.component.html",
    styleUrl: "./dialog-add-player.component.scss",
})
export class DialogAddPlayerComponent {
    name: string = "";

    onNoClick() {}
}
