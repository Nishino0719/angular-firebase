import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  petIds = [...Array(10)].map((_, i) => i + 1);
  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    pagination: {
      el: '.pager',
      clickable: true
    },
    centeredSlides : true,
    slidesPerView: 3
  };
  selectedPetId = 0;
  form = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.maxLength(40)
    ]],
    gender: ['', [
      Validators.required,
      Validators.pattern(/male|female/)
    ]]
  });

  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.form.value);
    console.log(this.selectedPetId);
  }

}
