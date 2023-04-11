import {Component, OnInit} from '@angular/core';
import {TensorflowService} from "./services/tensorflow.service";

@Component({
    selector: 'app-root',
    template: `
        <div class="card pt-2 flex justify-content-center">
            <h1>Trump AI speech ...</h1>
        </div>
        <div class="card pt-2 flex justify-content-center">
            <textarea [autoResize]="true" [cols]="150" [rows]="10" pInputTextarea [disabled]="true" [ngModel]="text"></textarea>
        </div>
        <div class="card flex pt-3 justify-content-center">
            <p-button (onClick)="generateText()" label="generate"></p-button>
        </div>
    `,
    styles: [`
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');

        h1 {
            font-size: 45px;
            font-weight: 300;
            color: #ffffff;
            border-right: 4px solid #ffffff;
            animation: cursor 1s infinite step-end, typing 15s infinite steps(16);
            white-space: nowrap;
            overflow: hidden;
        }

        @keyframes cursor {
            0%, 100% {
                border-color: transparent;
            }
            50% {
                border-color: #ffffff;
            }
        }

        @keyframes typing {
            0% {
                width: 0ch
            }
            /*Text is hidden*/
            30% {
                width: 16ch;
            }
            /*The enitre header will be typed out*/
            80% {
                width: 16ch;
            }
            /*Text stays visible*/
            90% {
                width: 0ch;
            }
            /*Text is deleted*/
            100% {
                width: 0ch;
            }
            /*Text stays hidden*/
        }
    `]
})
export class AppComponent implements OnInit {

    text: string;

    constructor(private tsService: TensorflowService) {
    }

    ngOnInit() {
        this.generateText();
    }

    generateText() {
        this.text = '';
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                this.text += this.tsService.generateWord();
            }, 500);
        }

    }
}
