import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';

// NOTE ilker add all angular material modules that we need to import into below array
const myMaterialModules2importAndExport = [
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule, // NOTE ilker added to have components in this module as well
    MaterialImportsModule,
    myMaterialModules2importAndExport // NOTE ilker import all needed angular material modules here via array declared
  ],
  exports: [
    myMaterialModules2importAndExport, // NOTE ilker make all angular material modules imported in above line available to all modules that import this module via this exports
    ToolbarComponent
  ]
})
export class MaterialModule { }
