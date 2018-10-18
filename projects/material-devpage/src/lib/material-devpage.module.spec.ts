import { MaterialDevpageModule } from './material-devpage.module';

describe('MaterialDevpageModule', () => {
  let materialDevpageModule: MaterialDevpageModule;

  beforeEach(() => {
    materialDevpageModule = new MaterialDevpageModule();
  });

  it('should create an instance', () => {
    expect(materialDevpageModule).toBeTruthy();
  });
});
