import java.util.ArrayList;

public class MockProfessorService implements ProfessorService {
    @Override
    public String busca(String nome) {

        if (nome == "João"){
            return ProfessorConst.Professor1;
        }else if (nome == "Flavio"){
            return ProfessorConst.Professor2;
        }else if (nome == "Matheus"){
            return ProfessorConst.Professor3;
        }else if (nome == "Josefino") {
            return ProfessorConst.Professor4;
        }else if (nome == "Robersvaldo") {
            return ProfessorConst.Professor5;
        }else if (nome == "Katrina") {
            return ProfessorConst.Professor6;
        }else{
            return ProfessorConst.Inesistente;
        }
    }

    @Override
    public boolean professorExistente(String nome) {

        ArrayList list = new ArrayList();
        list.add("João");
        list.add("Flavio");
        list.add("Matheus");
        list.add("Josefino");
        list.add("Robersvaldo");
        list.add("Katrina");

        for (int i=0; i < list.size(); i++){
            if (list.get(i).equals(nome) || list.get(i).equals(nome)){
                return true;
            }else{
                return false;
            }
        }
        return false;
    }
}
