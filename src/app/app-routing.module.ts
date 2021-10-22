import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [
  {path: 'lesson-one', loadChildren: () => import ('./feature/lesson-one/lesson-one.module').then(m => m.LessonOneModule)},
  {path: 'lesson-two', loadChildren: () => import ('./feature/lesson-two/lesson-two.module').then(m => m.LessonTwoModule)},
  {path: 'lesson-two-answer', loadChildren: () => import ('./feature/lesson-two-answer/lesson-two-answer.module').then(m => m.LessonTwoAnswerModule)}
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
