package two

import org.junit.Assert.assertEquals
import org.junit.Test
import readInput

class Day02Test {
    private val day = Day02()

    @Test
    fun partOneWorksWithTestInput() {
        assertEquals(
            8,
            day.part1(readInput("two/input/part-one-test-input")),
        )
    }

    @Test
    fun partOneWorksWithRealInput() {
        assertEquals(
            2449,
            day.part1(readInput("two/input/puzzle-input")),
        )
    }

    @Test
    fun partTwoWorksWithTestInput() {
        assertEquals(
            2286,
            day.part2(readInput("two/input/part-two-test-input")),
        )
    }

    @Test
    fun partTwoWorksWithRealInput() {
        assertEquals(
            63981,
            day.part2(readInput("two/input/puzzle-input")),
        )
    }
}

