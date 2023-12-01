package one

class Day01 {

    fun part1(input: List<String>): Int = input.map {
        getCombinedNum(it)
    }.sum()

    fun part2(input: List<String>): Int = input.map {
        getCombinedNum(replaceNumberNamesWithDigits(it))
    }.sum()

    private fun getCombinedNum(line: String): Int {
        val chars = line.toCharArray()
        var firstNum: Int? = null
        var lastNum: Int? = null

        var start = 0
        var end = chars.size - 1

        while (start <= end) {
            val first = chars[start]
            if (first.isDigit()) {
                firstNum = first.digitToInt()
            } else {
                start += 1
            }

            val last = chars[end]
            if (last.isDigit()) {
                lastNum = last.digitToInt()
            } else {
                end -= 1
            }

            if (firstNum != null && lastNum != null) {
                break
            }
        }

        return "$firstNum$lastNum".toInt()
    }

    private fun replaceNumberNamesWithDigits(line: String): String {
        var input = line

        for (i in 1..input.length) {
            val head = input.take(i)
            val tail = input.drop(i)

            input = replaceNums(head) + tail
        }

        return input
    }

    private fun replaceNums(it: String) = it.replace("nine", "9")
        .replace("eight", "8")
        .replace("seven", "7")
        .replace("six", "6")
        .replace("five", "5")
        .replace("four", "4")
        .replace("three", "3")
        .replace("two", "2")
        .replace("one", "1")
}
