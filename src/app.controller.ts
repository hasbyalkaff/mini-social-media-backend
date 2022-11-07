import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  glo=[];

  conv_arr(_array){
    var leng = _array.length;
    for(let i=0; i<leng; i++){
        var tamp = _array[i].length;
        if(tamp) this.conv_arr(_array[i]);
        else this.glo.push(_array[i]);
    }
  }

  pecah_digit(_input){
    var str = _input.toString();
    var leng = str.length;
    var test = [];
    for (let i = 0; i < str.length; i++) {
        leng--;
        test.push(str[i]*Math.pow(10, leng));
    } 
    return test;
  }

  @Get(':number')
  getHello(@Param() params){
    // return this.appService.getHello();
    return this.pecah_digit(params.number);
  }

  @Post()
  get(@Body() _array: []){
    this.glo = [];
    this.conv_arr(_array);
    return this.glo;
  }
  
}
