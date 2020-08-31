enum class StudyTypes {
    ELECTRICAL_ENGINEERING,
    CYBERNETICS,
    COMPUTER_SCIENCE,
    ROBOTICS,
    GENETIC_ENGINEERING,
    CHEMICAL_ENGINEERING,
    PHARMACEUTICALS,
    BIOCHEMISTRY,
    QUANTUM_PHYSICS,
    OPTICAL_PHYSICS;

    fun getFormattedName(): String {
        return if (name.contains("_")) {
            name
                    .split("_").joinToString(separator = " ") {
                        it.toLowerCase().capitalize()
                    }
        } else {
            name.toLowerCase().capitalize()
        }
    }
}