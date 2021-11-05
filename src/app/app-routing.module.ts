import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./feature/not-found/not-found.component";
import {HistoricalWeatherModule} from "./feature/historical-weather/historical-weather.module";

export const ROUTES: Routes = [
  {
    path: 'lesson-one',
    loadChildren: () => import ('./feature/lesson-one/lesson-one.module').then(m => m.LessonOneModule)
  },
  {
    path: 'lesson-two',
    loadChildren: () => import ('./feature/lesson-two/lesson-two.module').then(m => m.LessonTwoModule)
  },
  {
    path: 'lesson-two-answer',
    loadChildren: () => import ('./feature/lesson-two-answer/lesson-two-answer.module').then(m => m.LessonTwoAnswerModule)
  },
  {
    path: 'lesson-three-answer',
    loadChildren: () => import ('./feature/lesson-three-answer/lesson-three-answer.module').then(m => m.LessonThreeAnswerModule)
  },
  {
    path: 'lesson-three-pipe',
    loadChildren: () => import ('./feature/lesson-three-string-pipe/lesson-three-string-pipe.module').then(m => m.LessonThreeStringPipeModule)
  },
  {
    path: 'lesson-four-list-books',
    loadChildren: () => import ('./feature/lesson-four-list-books/lesson-four-list-books.module').then(m => m.LessonFourListBooksModule)
  },
  {
    path: 'lesson-four-answer',
    loadChildren: () => import ('./feature/lesson-four-answer/lesson-four-answer.module').then(m => m.LessonFourAnswerModule)
  },
  {
    path: 'lesson-five-answer',
    loadChildren: () => import ('./feature/lesson-five-answer/lesson-five-answer.module').then(m => m.LessonFiveAnswerModule)
  },
  {
    path: 'final-lesson-weather',
    loadChildren: () => import ('./feature/final-lesson-weather/final-lesson-weather.module').then(m => m.FinalLessonWeatherModule)
  },
  {
    path: 'historical-weather',
    loadChildren: () => import ('./feature/historical-weather/historical-weather.module').then(m => m.HistoricalWeatherModule)
  },
  {path: 'dashboard', loadChildren: () => import ('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: '', loadChildren: () => import ('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'test', loadChildren: () => import ('./feature/test/test.module').then(m => m.TestModule)},

  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
