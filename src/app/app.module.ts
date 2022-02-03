
        // import { NgModule } from '@angular/core';
        //import { CommonModule } from '@angular/common';
        //import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
        import { RouterModule, Routes } from '@angular/router';
        import { MatInputModule} from '@angular/material/input';
        import {MatFormFieldModule} from '@angular/material/form-field';
        import { MatCardModule } from '@angular/material/card';
        import { MatButtonModule} from '@angular/material/button';
        import { MatMenuModule } from '@angular/material/menu';
        import { MatToolbarModule } from '@angular/material/toolbar';
        import {MatTooltipModule} from '@angular/material/tooltip';
        import { MatIconModule } from '@angular/material/icon';
        import { ErrorHandler,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
        import {MatDialogModule} from "@angular/material/dialog";
        import {MatBadgeModule} from '@angular/material/badge';
        import {MatTab, MatTabsModule} from '@angular/material/tabs';
        
        import {FormsModule,ReactiveFormsModule} from '@angular/forms'
        import {MatStep, MatStepperModule} from '@angular/material/stepper';
        
        import { MatButtonToggleModule} from '@angular/material/button-toggle';
               
        import {MatSlideToggle, MatSlideToggleModule} from '@angular/material/slide-toggle';
        // import { TabStructureComponent } from './tab-structure.component';
        import {MatSelectModule} from '@angular/material/select';
        import {MatRadioModule} from '@angular/material/radio';
        import {MatCheckboxModule} from '@angular/material/checkbox';
        import {MatSliderModule} from '@angular/material/slider';
        import { MatProgressBarModule } from '@angular/material/progress-bar';
        import { MatNativeDateModule } from '@angular/material/core';
        import {MatDatepickerModule} from '@angular/material/datepicker';
        import { MatSnackBarModule } from '@angular/material/snack-bar';
        import {MatExpansionModule} from '@angular/material/expansion';
        import {MatTableModule} from '@angular/material/table'; 
        import {CdkAccordionModule} from '@angular/cdk/accordion';
      import { CommonModule } from '@angular/common';
        import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { HomeReducer } from './Redux/reducer/homeReducer';
import {projectReducer} from './Redux/reducer/projectReducer'
import { EffectsModule } from '@ngrx/effects';
import {HomeEffects} from './Redux/effects/home.effects'
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [ 
        //CommonModule,
        //BrowserAnimationsModule,
        // RouterModule.forChild(routes),  
        StoreModule.forRoot({users:HomeReducer, users1:projectReducer }),
        EffectsModule.forRoot([HomeEffects]),
        MatInputModule,
        MatTabsModule,
        MatFormFieldModule,  
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatCardModule,
        MatDialogModule,
        MatTooltipModule,
        MatBadgeModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSliderModule,
        MatProgressBarModule,
        MatNativeDateModule,
        MatDatepickerModule,
        FormsModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatTableModule,
        CdkAccordionModule
      
        ,CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
        , BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
