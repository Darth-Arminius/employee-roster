enum class Roles {
    CYBERNETICS_SURGEON,
    ROBOTICS_ENGINEER,
    SOFTWARE_DEVELOPER,
    AI_DEVELOPER,
    GENE_SURGEON,
    PHARMACIST,
    BIOCHEMIST,
    QUANTUM_PHYSICIST,
    LASER_SCIENTIST;

    fun getFormattedName(): String {
        return when {
            ordinal == AI_DEVELOPER.ordinal -> {
                name.split("_").joinToString(separator = " ") {
                    if (it.contains("AI")) it.toUpperCase() else it.toLowerCase().capitalize()
                }
            }
            name.contains("_") -> {
                name
                        .split("_").joinToString(separator = " ") {
                            it.toLowerCase().capitalize()
                        }
            }
            else -> {
                name.toLowerCase().capitalize()
            }
        }
    }
}

data class StudyToRoles(
        val studyType: StudyTypes,
        val roles: List<Roles>
)

val studyToRoles = listOf<StudyToRoles>(
        StudyToRoles(
                studyType = StudyTypes.ELECTRICAL_ENGINEERING,
                roles = listOf(Roles.CYBERNETICS_SURGEON, Roles.ROBOTICS_ENGINEER)
        ),
        StudyToRoles(
                studyType = StudyTypes.CYBERNETICS,
                roles = listOf(Roles.CYBERNETICS_SURGEON, Roles.ROBOTICS_ENGINEER, Roles.SOFTWARE_DEVELOPER)
        ),
        StudyToRoles(
                studyType = StudyTypes.COMPUTER_SCIENCE,
                roles = listOf(Roles.ROBOTICS_ENGINEER, Roles.SOFTWARE_DEVELOPER, Roles.AI_DEVELOPER)
        ),
        StudyToRoles(
                studyType = StudyTypes.ROBOTICS,
                roles = listOf(Roles.ROBOTICS_ENGINEER, Roles.CYBERNETICS_SURGEON)
        ),
        StudyToRoles(
                studyType = StudyTypes.GENETIC_ENGINEERING,
                roles = listOf(Roles.GENE_SURGEON, Roles.BIOCHEMIST)
        ),
        StudyToRoles(
                studyType = StudyTypes.CHEMICAL_ENGINEERING,
                roles = listOf(Roles.BIOCHEMIST, Roles.PHARMACIST)
        ),
        StudyToRoles(
                studyType = StudyTypes.PHARMACEUTICALS,
                roles = listOf(Roles.PHARMACIST, Roles.BIOCHEMIST)
        ),
        StudyToRoles(
                studyType = StudyTypes.BIOCHEMISTRY,
                roles = listOf(Roles.BIOCHEMIST, Roles.PHARMACIST)
        ),
        StudyToRoles(
                studyType = StudyTypes.QUANTUM_PHYSICS,
                roles = listOf(Roles.QUANTUM_PHYSICIST, Roles.SOFTWARE_DEVELOPER, Roles.AI_DEVELOPER)
        ),
        StudyToRoles(
                studyType = StudyTypes.OPTICAL_PHYSICS,
                roles = listOf(Roles.LASER_SCIENTIST, Roles.ROBOTICS_ENGINEER, Roles.CYBERNETICS_SURGEON)
        )
)
