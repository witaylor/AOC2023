const fs = require('fs');

const dayArg = Number.parseInt(process.argv.pop());
// const currentDate = new Date().getDate();
const currentDate = 22;

let dayToCreate = dayArg;
if (isNaN(dayArg) || dayArg < 0 || dayArg > 25) {
    console.warn(`\n⚠️ No day number provided. Using current date: ${currentDate}`);

    if (currentDate > 25) {
        console.error('🚨 Current date is after the 25th. AOC has ended.');
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

// create directory
const dir = `src/${dayAsWords}`;
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
} else {
    console.warn('⚠️ Directory already exists. Continuing...');
}

// create blank input text files
fs.appendFileSync(`${dir}/input.txt`, '');
fs.appendFileSync(`${dir}/test-input.txt`, '');

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

class ${className}Test {
    private val day = ${className}()
    private val input = readInput("${dayAsWords}/test-input")

    @Test
    fun partOneWorks() {
        assertEquals(day.part1(input), 0)
    }

    @Test
    fun partTwoWorks() {
        assertEquals(day.part2(input), 0)
    }
}
`);

// create DayXX README
fs.appendFileSync(
    `${dir}/README.md`,
    `# Day ${dayToCreate}: {{ TITLE }}
`);