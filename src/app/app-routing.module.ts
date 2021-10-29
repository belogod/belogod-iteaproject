import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LessonFourListBooksModule} from "./feature/lesson-four-list-books/lesson-four-list-books.module";

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
  {path: 'dashboard', loadChildren: () => import ('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'test', loadChildren: () => import ('./feature/test/test.module').then(m => m.TestModule)},
  {path: '**', redirectTo: 'dashboard'}
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
