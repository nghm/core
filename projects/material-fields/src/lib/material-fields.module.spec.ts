import { MaterialFieldsModule } from './material-fields.module';

describe('MaterialFieldsModule', () => {
  let materialFieldsModule: MaterialFieldsModule;

  beforeEach(() => {
    materialFieldsModule = new MaterialFieldsModule();
  });

  it('should create an instance', () => {
    expect(materialFieldsModule).toBeTruthy();
  });
});
