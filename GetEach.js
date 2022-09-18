import Api from '@/services/Api';
export default{
   getEachFaculty(){
        return Api().get('geteachfaculty');
    },
    getEachStudent(){
        console.log(Api().get('geteachstudent'));
        return Api().get('geteachstudent');
    },

    
}