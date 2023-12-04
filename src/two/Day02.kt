package two

class Day02 {

    fun part1(input: List<String>) = input.sumOf { game ->
        val limits = mapOf("red" to 12, "green" to 13, "blue" to 14)

        // get game id
        val (gameIdStr, games) = game.split(": ")
        val gameId = gameIdStr.split(" ").last().toInt()

        // process game
        val validGame = games.split("; ").all {
            val balls = it.split(", ")

            balls.all { ball ->
                val (value, colour) = ball.split(" ")
                val colourLimit = limits[colour] ?: 0

                value.toInt() <= colourLimit
            }
        }

        if (validGame) gameId else 0
    }

    fun part2(input: List<String>) = input.sumOf { game ->
        val (_, allGames) = game.split(": ")
        val games = allGames.split("; ")

        var minimumRed = 0
        var minimumGreen = 0
        var minimumBlue = 0

        games.forEach { balls ->
            balls.split(", ").forEach { ball ->
                val (value, colour) = ball.split(" ")
                when (colour) {
                    "red" -> minimumRed = maxOf(minimumRed, value.toInt())
                    "green" -> minimumGreen = maxOf(minimumGreen, value.toInt())
                    "blue" -> minimumBlue = maxOf(minimumBlue, value.toInt())
                }
            }
        }

        minimumRed * minimumGreen * minimumBlue
    }
}
