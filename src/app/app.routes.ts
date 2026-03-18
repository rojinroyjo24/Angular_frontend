import { Routes } from '@angular/router';
import { Day1 } from './day1/day1';
import { Day2 } from './day2/day2';
import { Daytwo } from './daytwo/daytwo';
import { Day4 } from './day4/day4';
import { Day5 } from './day5/day5';
import { Day6part1 } from './day6part1/day6part1';
import { Day6part2 } from './day6part2/day6part2';
import { Dayapi1 } from './dayapi1/dayapi1';
import { Day8view } from './day8view/day8view';
import { Edittodo } from './edittodo/edittodo';
import { Localizee } from './localizee/localizee';

export const routes: Routes = [

    {path:'D1',component:Day1},
    {path:'D2',component:Day2},
    {path:'Dtwo',component:Daytwo},
    {path:'D4',component:Day4},
    {path:'D5',component:Day5},
    {path:'D6-Part1',component:Day6part1},
    {path:'D6-Part2',component:Day6part2},
    {path:'Dapi',component:Dayapi1},
    {path:'Day8view',component:Day8view},
    {path:'Edit/:id',component:Edittodo},
    {path:'Localize',component:Localizee},









];
