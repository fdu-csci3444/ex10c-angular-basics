import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

// NOTE ilker add all angular material modules that we need to import into below array
const myMaterialModules2importAndExport = [
  MatToolbarModule
];


@NgModule({
  declarations: [],
  imports: [
    myMaterialModules2importAndExport // NOTE ilker import all needed angular material modules here via array declared
  ],
  exports: [
    myMaterialModules2importAndExport // NOTE ilker make all angular material modules imported in above line available to all modules that import this module via this exports
  ]
})
export class MaterialImportsModule { }
