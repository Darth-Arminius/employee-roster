import kotlinx.html.classes
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlin.browser.document

fun main() {
    val root = document.getElementById("root")

    val scientist = generateEmployee(EmployeeType.SCIENTIST)
    val administrator = generateEmployee(EmployeeType.ADMINISTRATOR)
    val soldier = generateEmployee(EmployeeType.SOLDIER)

    val div = document.create.div {
        classes = setOf("container")
        div {
            classes = setOf("card")
            div {
                classes = setOf("inner")
                +"Type: ${scientist.type.getFormatterName()}"
            }
            div {
                classes = setOf("inner")
                div {
                    classes = setOf("inner-row")
                    +scientist.fullName.title
                }
                div {
                    classes = setOf("inner-row")
                    +scientist.fullName.forename
                }
                if (scientist.fullName.middleName != null) {
                    div {
                        classes = setOf("inner-row")
                        +scientist.fullName.middleName
                    }
                }
                div {
                    classes = setOf("inner-row")
                    +scientist.fullName.surname
                }
            }
            div {
                classes = setOf("inner")
                div {
                    classes = setOf("inner-row")
                    +"Age: ${scientist.age}"
                }
                div {
                    classes = setOf("inner-row")
                    +"Sex: ${scientist.sex}"
                }
            }
            div {
                classes = setOf("row")
                div {
                    classes = setOf("inner")
                    +"Education"
                }
                div {
                    classes = setOf("inner-row")
                    +"Major: ${scientist.education.major}"
                }
                div {
                    classes = setOf("inner-row")
                    +"Minor: ${scientist.education.minor}"
                }
                div {
                    classes = setOf("inner-row")
                    +"Location: ${scientist.education.location}"
                }
            }
            div {
                classes = setOf("row")
                div {
                    classes = setOf("inner")
                    +"Past experience"
                }
                scientist.workExperience.forEach {
                    div {
                        classes = setOf("container")
                        div {
                            classes = setOf("inner-row")
                            +"Role: ${it.role}"
                        }
                        div {
                            classes = setOf("inner-row")
                            +"Years: ${it.years}"
                        }
                    }
                }
            }
        }
    }

    root!!.appendChild(div)
}