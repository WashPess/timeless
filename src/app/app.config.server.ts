<<<<<<< HEAD
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
=======
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
>>>>>>> 63ce036 (START)
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
