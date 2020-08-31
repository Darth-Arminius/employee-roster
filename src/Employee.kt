data class FullName(
        val title: String,
        val forename: String,
        val middleName: String?,
        val surname: String
)

data class Education(
        val major: String,
        val minor: String,
        val location: String
)

data class WorkExperience(
        val role: String,
        val years: Int
)

data class Employee(
        val type: EmployeeType,
        val fullName: FullName,
        val age: Int,
        val sex: String,
        val education: Education,
        val workExperience: List<WorkExperience>
)