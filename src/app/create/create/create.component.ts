import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Pet } from 'src/app/interfaces/pet';
import { AuthService } from 'src/app/services/auth.service';
import { PetService } from 'src/app/services/pet.service';

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
    centeredSlides: true,
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
    private fb: FormBuilder,
    private petService: PetService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit(): any {
    const formData = this.form.value;
    console.log(this.form.value);
    console.log(this.selectedPetId);
    this.petService.createPet({
      petImageId: this.selectedPetId,
      name: this.form.value.name,
      level: 1,
      exp: 0,
      trainerId: this.authService.uid,
      gender: this.form.value.gender
    });
  }

}
