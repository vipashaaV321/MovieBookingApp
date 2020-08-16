import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-moviebooking',
  templateUrl: './moviebooking.component.html',
  styleUrls: ['./moviebooking.component.css']
})
export class MoviebookingComponent {
  @Output() redirect: EventEmitter<any> = new EventEmitter();
  registraion: FormGroup;
  isSubmitted = false;
  text: string;
  msgs: Message[] = [];
  Movie: any = ['Avengers EndGame', 'The AquaMan', 'Harry Potter', 'SuperMan vs BatMan', 'shawshank Redemption'];
  Time: any = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
  constructor(public fb: FormBuilder, private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService) { }


  /*########### Form ###########*/
  registrationForm = this.fb.group({
    MovieName: ['', [Validators.required]],
    MovieTime: ['', [Validators.required]],
    NoOfPerson: ['', [Validators.required]],
  })
  data: any = this.registrationForm;


  // Getter method to access formcontrols
  get MovieName() {
    return this.registrationForm.get('MovieName');
  }
  get MovieTime() {
    return this.registrationForm.get('MovieTime');
  }
  get NoOfPerson() {
    return this.registrationForm.get('NoOfPerson');
  }
  /*########### Onsubmit ###########*/
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      this.messageService.add({ severity: 'warn', summary: 'Incomplete Data', detail: 'Plz Add All the fields' });
      return false;
    } else {

      this.confirmationService.confirm({
        message: 'Are you sure that you want to book the Ticket?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {

          this.redirect.emit(this.data);//emits the data
          this.router.navigate(['/bookings'], { queryParams: { Tickets: JSON.stringify(this.registrationForm.value) } },);//redirects url to new component
          this.messageService.add({ severity: 'info', summary: 'Done!!', detail: 'Ticket Booked Succesfully' });
        },
        reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Cancle booking!!', detail: 'Plz Try again to book' });

        }
      })

    }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
