object Bob {
  def response(statement: String): String = {
    // Handle "silence" by treating strings consisting only of whitespace as empty string
    val input = statement.trim

    val isQuestion = input.endsWith("?")
    
    // Check `input == input.toUpperCase` to detect all-caps and also ensuring `input.exists(_.isLetter)` is true to prevent numbers or symbols flagged as yelling
    val isYelling = input.exists(_.isLetter) && input == input.toUpperCase
    val isSilence = input.isEmpty

    (isQuestion, isYelling, isSilence) match {
      // Yelled Question
      case (_, true, false) if isQuestion => "Calm down, I know what I'm doing!"
      // Yelling
      case (_, true, false)               => "Whoa, chill out!"
      // Question
      case (true, false, false)           => "Sure."
      // Silence
      case (_, false, true)               => "Fine. Be that way!"
      // Everything else
      case _                              => "Whatever."
    }
  }
}