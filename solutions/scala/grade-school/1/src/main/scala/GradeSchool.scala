import scala.collection.immutable.ListMap

class School {
  type DB = Map[Int, Seq[String]]

  // Internal storage for the database
  private var _db: DB = Map.empty

  // Adds a student to the roster if they aren't already present
  def add(name: String, g: Int): Unit = {
    // Check if the student exists in any grade
    val exists = _db.values.flatten.toSeq.contains(name)
    
    if (!exists) {
      val currentStudents = _db.getOrElse(g, Seq.empty)
      _db = _db + (g -> (currentStudents :+ name))
    }
  }

  // Returns the internal database
  def db: DB = _db

  // Returns the list of students in a given grade, or an empty sequence if none exist
  def grade(g: Int): Seq[String] = _db.getOrElse(g, Seq.empty)

  // Returns a DB sorted by grade (keys) and then by student names (values)
  def sorted: DB = {
    // Sort keys (grades) numerically, then sort the sequences (names) alphabetically
    val sortedList = _db.toSeq
      .sortBy { case (grade, _) => grade }
      .map { case (grade, names) => (grade, names.sorted) }
    
    // ListMap preserves the insertion order of the sorted elements
    ListMap(sortedList: _*)
  }
}