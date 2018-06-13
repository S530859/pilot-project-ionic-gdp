export class CustomService{
    private user: string = ''

    storeselecteduser(selecteduser){
         this.user = selecteduser;
    }
    getselecteduser(){
        return this.user;
    }
}