echo "$1" | rev

# In Bash, the $ symbol means "substitute with the value of this variable or parameter".
# Examples:
#   name="Bob"     # define a variable
#   echo $name       # prints the value of 'name', not the word 'name'
#
# Special cases:
#   $0  -> the script name
#   $1  -> the first argument passed to the script
#   $2  -> the second argument, and so on
#   $#  -> the number of arguments
#   $@  -> all arguments
#   $?  -> exit code of the last command
#   $$  -> process ID of the current script
#
# Special cases example:
# Suppose you run the script like this:
#    ./reverse_string.sh hello world
#
# Inside the script:
#    $0  -> ./reverse_string.sh   (the script name)
#    $1  -> hello                  (the first argument)
#    $2  -> world                  (the second argument)
#    $#  -> 2                      (number of arguments)
#    $@  -> hello world            (all arguments as separate words)
#    $*  -> hello world            (all arguments as a single string)
#    $$  -> 12345                  (process ID of the script)
#    $?  -> 0                      (exit code of the last command)

#
# Always remember: without the $, Bash treats it as plain text (the variable name itself).
