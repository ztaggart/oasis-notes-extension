

import com.mysql.cj.conf;
import java.sql.Drivermanager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBC {
	public static void main(String[] args) throws SQLException{
		String url = "jdbc:mysql://localhost"
		String uname = "Chase Leffers";
		String password = "password";
		String query = "select * from EngineeringStudents";
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			//TODo auto-generate
			e.printStackTrace();	
		}
		
		try {
			Connection con = DriverManager.getConnection(url, uname, password);
			Statement statement = con.createStatement();
			ResultSet result = statement.executeQuery(query);
			
			while (result.next()) {
				String UniversityData = "";
				for (int i = 1; i <=6, i++ ) {
					UniversityData += result.getString(i) + ":";
				}
				System.out.println(UniversityData);
			}

			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
}
