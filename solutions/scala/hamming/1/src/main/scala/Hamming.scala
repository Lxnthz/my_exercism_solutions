object Hamming {
  def distance(dnaStrandOne: String, dnaStrandTwo: String): Option[Int] = {
    if (dnaStrandOne.length != dnaStrandTwo.length) { None }
    else {
      val distance = dnaStrandOne.zip(dnaStrandTwo).count {
        case (nuc1, nuc2) => nuc1 != nuc2
      }
      Some(distance)
    }
  }
}


/* 
  `Option[Int]`: Since a distance cannot be calculated if the strings have
                 different lengths, `Option` is the idiomatic way to handle
                 this "failure" case. We return `Some(distance)` if they 
                 match, and `None` if they don't.
  
  `.zip`: This combine the two strings into a sequence of pairs ( e.g., 
          ("G", "G"), ("A", "A"), ("C", "T") ). It automatically stops at 
          the length of the shorter string (though our length check prevents
          us from needing to worry about that discrepancy here).

  `.count`: This iterate through the zipped pairs and increments the counter
            whenever the two nucleotides are not equal (nuc1 != nuc2)
*/