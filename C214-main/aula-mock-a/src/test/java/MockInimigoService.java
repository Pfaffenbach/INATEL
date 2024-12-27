public class MockInimigoService implements InimigoService {

    @Override
    public String busca(int id) {

        if(id == 10){
            return InimigoConst.SKELETON;
        }else{
            return null;
        }
    }
}
