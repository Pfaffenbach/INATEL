import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class BuscaProfessor {
    ProfessorService professorService;

    public BuscaProfessor(ProfessorService service){
        this.professorService = service;
    }

    public Professor buscaprofessor(String nome){
        String professorJson = professorService.busca(nome);

        JsonObject jsonObject = JsonParser.parseString(professorJson).getAsJsonObject();

        return new Professor(jsonObject.get("nomeDoProfessor").getAsString(),
                jsonObject.get("horarioDeAtendimento").getAsInt(),
                jsonObject.get("periodo").getAsString()
                );
    }

    public boolean verificaArrayListExistente(String nome){
        boolean professorExistente = professorService.professorExistente(nome);

        if(professorExistente){
            return true;
        }else {
            return false;
        }
    }
}
