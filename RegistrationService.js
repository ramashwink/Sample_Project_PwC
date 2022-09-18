import Api from '@/services/Api';
export default{
    addFaculty(data){
        return Api().post('addfaculty',data);
    },
    addStudent(data){
        return Api().post('addstudent',data);
    },
    getStudent(){
        return Api().get('getadminstudent');
    },
    getFaculty(){
        return Api().get('getadminfaculty');
    },
    deleteFaculty(data){
        return Api().post('deleteadminfaculty',data);
    }
    
}

