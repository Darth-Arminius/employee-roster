import kotlin.random.Random

fun rollForRole(diceRollResult: Int, startingPercentage: Int, percentage: Int, roles: List<Roles>): Roles {
    var start = startingPercentage
    var end = (start + percentage) - 1

    for (x in roles.indices) {
        if (diceRollResult in start..end) {
            return roles[x]
        } else {
            start += percentage
            end += percentage
        }
    }

    throw Error("Failed to find a role")
}

fun generatePastRoles(maxNumRoles: Int, maxYears: Int, major: StudyTypes, minor: StudyTypes): List<WorkExperience> {
    val majorRoles = studyToRoles.find {
        it.studyType == major
    }
    val minorRoles = studyToRoles.find {
        it.studyType == minor
    }

    var yearsLeft = maxYears
    val workExperience: MutableList<WorkExperience> = mutableListOf()

    for (x in 0 until maxNumRoles) {
        val role: Roles
        // roll a 100 sided die to determine the employee's job role
        when (val roleDiceRoll = Random.nextInt(1, 101)) {
            in 1..60 -> {
                // there is a 60% chance the employee would have had a job role based on their major
                // (split evenly among job roles related to that major)
                val majorPercentage = 60 / majorRoles!!.roles.size
                role = rollForRole(roleDiceRoll, 1, majorPercentage, majorRoles.roles)
            }
            in 61..90 -> {
                // there is a 30% chance the employee would have had a job role based on their minor
                // (split evenly among job roles related to that minor)
                val minorPercentage = 30 / minorRoles!!.roles.size
                role = rollForRole(roleDiceRoll, 61, minorPercentage, minorRoles.roles)
            }
            in 91..100 -> {
                // there is a 10% chance the employee would have had any other job role not related to their study
                role = Roles.values().filter {
                    !majorRoles!!.roles.contains(it) && !minorRoles!!.roles.contains(it)
                }.random()
            }
            else -> {
                throw Error("Failed to roll for role")
            }
        }

        // roll for years of experience
        val years = Random.nextInt(1, yearsLeft + 1)
        workExperience.add(WorkExperience(role.getFormattedName(), years))
        yearsLeft -= years // max years of experience to prevent more work years than years lived
        if (yearsLeft <= 0) break // stop generating experience if max years exhausted
    }

    return workExperience
}

fun generateEmployee(type: EmployeeType): Employee {
    // roll for sex and age
    val randomSex = Random.nextInt(0, 2)
    val age = Random.nextInt(25, 66)

    // sex specific values
    var title: Titles? = null
    val forename: String
    val sex: String
    if (type == EmployeeType.SCIENTIST) {
        val drRoll = Random.nextInt(0, 101)
        if (drRoll <= 80) title = Titles.DR
    }
    if (randomSex == 0) {
        title = title ?: Titles.getMaleTitles().random()
        forename = maleForenames.random()
        sex = "Male"
    } else {
        title = title ?: Titles.getFemaleTitles().random()
        forename = femaleForenames.random()
        sex = "Female"
    }

    // roll for middle name
    // around a 20% chance of the employee having a middle name
    val middleNameChance = Random.nextInt(0, 101)
    val middleName = if (middleNameChance <= 20) middleNames.random() else null

    val surname = surnames.random()

    // education
    val major = StudyTypes.values().random()
    val minor = StudyTypes.values().filter { it != major }.random()
    val studyLocation = studyLocations.random()

    // work experience
    var workExperience: List<WorkExperience> = listOf()
    when (age) {
        25 -> {
            // young, little experience
            workExperience = generatePastRoles(1, 1, major, minor)
        }
        in 26..27 -> {
            // young, little experience
            workExperience = generatePastRoles(1, 2, major, minor)
        }
        in 28..30 -> {
            // young, little experience
            workExperience = generatePastRoles(1, 3, major, minor)
        }
        in 30..35 -> {
            // young, little experience
            workExperience = generatePastRoles(2, 5, major, minor)
        }
        in 36..45 -> {
            // mid, some experience
            workExperience = generatePastRoles(3, 10, major, minor)
        }
        in 46..65 -> {
            // old, lots experience
            workExperience = generatePastRoles(6, 25, major, minor)
        }
    }

    return Employee(
            type = type,
            fullName = FullName(title.getFormatterName(), forename, middleName, surname),
            age = age,
            sex = sex,
            education = Education(major.getFormattedName(), minor.getFormattedName(), studyLocation),
            workExperience = workExperience
    )
}