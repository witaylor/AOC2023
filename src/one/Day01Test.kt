package one

import org.junit.Assert.assertEquals
import org.junit.Test
import readInput

class Day01Test {
    private val day = Day01()

    @Test
    fun partOneWorksWithTestInput() {
        assertEquals(
            142,
            day.part1(readInput("one/input/part-one-test-input")),
        )
    }

    @Test
    fun partOneWorksWithRealInput() {
        assertEquals(
            54561,
            day.part1(readInput("one/input/puzzle-input")),
        )
    }

    @Test
    fun partTwoWorksWithTestInput() {
        assertEquals(
            281,
            day.part2(readInput("one/input/part-two-test-input")),
        )
    }

    @Test
    fun partTwoWorksWithRealInput() {
        assertEquals(
            54076,
            day.part2(readInput("one/input/puzzle-input")),
        )
    }
}
