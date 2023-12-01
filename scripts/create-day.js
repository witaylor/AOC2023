const fs = require('fs');

const dayArg = Number.parseInt(process.argv.pop());
const currentDate = new Date().getDate();

let dayToCreate = dayArg;
if (isNaN(dayArg) || dayArg < 0 || dayArg > 25) {
    console.warn(`\n⚠️ No day number provided. Using current date: ${currentDate}`);

    if (currentDate > 25) {
        console.error('🚨 Current date is after the 25th. AOC has ended.\n');
        process.exit(1);
    }

    dayToCreate = currentDate;
}

const dayAsWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty-one",
    "twenty-two",
    "twenty-three",
    "twenty-four",
    "twenty-five"
][dayToCreate];

console.log('📝 Creating files for Day ' + dayToCreate + '...');

// create directories
const dir = `src/${dayAsWords}`;
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
} else {
    console.warn('⚠️ Directory already exists. Continuing...');
}
const inputDir = `src/${dayAsWords}/input`;
if (!fs.existsSync(inputDir)) {
    fs.mkdirSync(inputDir);
} else {
    console.warn('⚠️ Input directory already exists. Continuing...');
}

// create blank input text files
fs.appendFileSync(`${dir}/input/puzzle-input.txt`, '');
fs.appendFileSync(`${dir}/input/part-one-test-input.txt`, '');
fs.appendFileSync(`${dir}/input/part-two-test-input.txt`, '');

// create DayXX impl file
const paddedDayNums = dayToCreate.toString().padStart(2, '0');
const className = `Day${paddedDayNums}`;
fs.appendFileSync(
    `${dir}/${className}.kt`,
    `package ${dayAsWords}

class ${className} {

    fun part1(input: List<String>): Int {
        return input.size
    }

    fun part2(input: List<String>): Int {
        return input.size
    }
}
`);

// create DayXX test file
fs.appendFileSync(
    `${dir}/${className}Test.kt`,
    `package ${dayAsWords}

import org.junit.Assert.assertEquals
import org.junit.Test
import readInput

class Day${paddedDayNums}Test {
    private val day = Day${paddedDayNums}()

    @Test
    fun partOneWorksWithTestInput() {
        assertEquals(
            0,
            day.part1(readInput("${dayAsWords}/input/part-one-test-input")),
        )
    }

    @Test
    fun partOneWorksWithRealInput() {
        assertEquals(
            0,
            day.part1(readInput("${dayAsWords}/input/puzzle-input")),
        )
    }

    @Test
    fun partTwoWorksWithTestInput() {
        assertEquals(
            0,
            day.part2(readInput("${dayAsWords}/input/part-two-test-input")),
        )
    }

    @Test
    fun partTwoWorksWithRealInput() {
        assertEquals(
            0,
            day.part2(readInput("${dayAsWords}/input/puzzle-input")),
        )
    }
}

`);

// create DayXX README
fs.appendFileSync(
    `${dir}/README.md`,
    `# --- Day ${paddedDayNums}: ? ---
`);

console.log('✅ Done!')