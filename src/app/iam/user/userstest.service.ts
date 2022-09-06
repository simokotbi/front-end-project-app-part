import{Injectable}from '@angular/core';
import{Uinterface}from '../user/users/Uinterface'


@Injectable()
export class usertestservice{
getusers():Uinterface[]{
    return [  
          {login:'1111', mailAdress:'simo@gmail.com',  phoneNumber: '06666' ,jobTitle:'Poste'}
      
    ];
}

}
