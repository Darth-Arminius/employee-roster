enum class Titles {
    MR, MRS, MISS, MS, DR;

    fun getFormatterName() = name.toLowerCase().capitalize()

    companion object {
        fun getMaleTitles() = arrayOf(MR)

        fun getFemaleTitles() = arrayOf(MRS, MISS, MS)
    }
}