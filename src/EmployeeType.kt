enum class EmployeeType {
    SCIENTIST, ADMINISTRATOR, SOLDIER;

    fun getFormatterName() = name.toLowerCase().capitalize()
}