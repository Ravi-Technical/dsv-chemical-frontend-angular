import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductOption } from '../../share/commonModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enquire-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enquire-form.html',
  styleUrl: './enquire-form.scss',
})
export class EnquireForm implements OnInit {

  inquiryForm!: FormGroup;
  productsGroup!: FormGroup; // ✅ separate property — NOT a getter, NOT reassigned

  products: ProductOption[] = [
    { id: 'varnishes_lacquers',             label: 'Varnishes & Lacquers' },
    { id: 'adhesives',                       label: 'Adhesives' },
    { id: 'primers',                         label: 'Primers' },
    { id: 'gravure_printing_ink',            label: 'Gravure Printing Ink' },
    { id: 'economic_synthetic_enamels',      label: 'Economic Synthetic Enamels' },
    { id: 'high_performance_epoxy_coatings', label: 'High Performance Epoxy Coatings & Adhesives' },
    { id: 'ind_primers_undercoats',          label: 'Ind. Primers & Undercoats' },
    { id: 'flexographic_printing_ink',       label: 'Flexographic Printing Ink' },
    { id: 'wood_finishes',                   label: 'Wood Finishes' },
    { id: 'automotive_paints_oem',           label: 'Automotive Paints (OEM)' },
    { id: 'marine_paints',                   label: 'Marine Paints' },
    { id: 'heat_set_web_offset',             label: 'Heat Set, Web Offset Printing Ink' },
    { id: 'rc_finishes',                     label: 'R.C. Finishes' },
    { id: 'economical_stoving_paints',       label: 'Economical Stoving Paints' },
    { id: 'quick_drying_paints',             label: 'Quick Drying Paints' },
    { id: 'metal_deco_tin_printing_inks',    label: 'Metal Deco. & Tin Printing Inks' },
    { id: 'industrial_stoving_paints',       label: 'Industrial Stoving Paints' },
    { id: 'chemical_resistant_paints',       label: 'Chemical Resistant Paints' },
    { id: 'hammer_finish_aluminium_paints',  label: 'Hammer Finish, Aluminium Paints' },
    { id: 'ball_point_ink',                  label: 'Ball Point Ink' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    // ✅ Step 1: Build checkbox controls as { id: false } map
    const productControls: Record<string, [boolean]> = {};
    this.products.forEach(p => {
      productControls[p.id] = [false];
    });

    // ✅ Step 2: Create productsGroup FIRST as a standalone FormGroup
    this.productsGroup = this.fb.group(productControls);

    // ✅ Step 3: Embed productsGroup into the main form
    this.inquiryForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(2)]],
      address:      ['', Validators.required],
      city:         ['', Validators.required],
      country:      ['', Validators.required],
      telNo:        ['', [Validators.required, Validators.pattern(/^[+\d\s\-()]{7,20}$/)]],
      fax:          [''],
      email:        ['', [Validators.required, Validators.email]],
      queries:      [''],
      products:     this.productsGroup,  // ✅ embed the already-created FormGroup
      otherProduct: [''],
    });
  }

  // ✅ Convenience getter for top-level controls only
  get f() {
    return this.inquiryForm.controls;
  }

  atLeastOneProductSelected(): boolean {
    // ✅ Read from productsGroup.value directly — safe always
    const productValues = this.productsGroup?.value ?? {};
    return Object.values(productValues).some(v => v === true);
  }

  onSubmit(): void {
    // ✅ Validate the main form — NOT reassigned to products subgroup
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    if (!this.atLeastOneProductSelected() && !this.f['otherProduct']?.value) {
      alert('Please select at least one product or specify in "If other, please specify".');
      return;
    }

    const formValue = this.inquiryForm.value;

    // ✅ Always read from productsGroup.value — never from formValue.products
    const productsValue: Record<string, boolean> = this.productsGroup?.value ?? {};

    const selectedProducts = this.products
      .filter(p => productsValue[p.id] === true)
      .map(p => p.label);

    if (formValue.otherProduct) {
      selectedProducts.push(formValue.otherProduct);
    }

    const payload = {
      customerName: formValue.customerName,
      address:      formValue.address,
      city:         formValue.city,
      country:      formValue.country,
      telNo:        formValue.telNo,
      fax:          formValue.fax,
      email:        formValue.email,
      queries:      formValue.queries,
      products:     selectedProducts,
    };

    console.log('Inquiry form submitted:', payload);
    // TODO: send payload to your API
  }

  onReset(): void {
    // ✅ Reset main form fields with explicit defaults (avoids null values)
    this.inquiryForm.reset({
      customerName: '',
      address:      '',
      city:         '',
      country:      '',
      telNo:        '',
      fax:          '',
      email:        '',
      queries:      '',
      otherProduct: '',
    });

    // ✅ Reset all product checkboxes explicitly to false
    const resetProducts: Record<string, boolean> = {};
    this.products.forEach(p => { resetProducts[p.id] = false; });
    this.productsGroup.setValue(resetProducts);
  }

  isInvalid(field: string): boolean {
    const ctrl = this.inquiryForm?.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}