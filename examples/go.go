
// 1. Example ----------------------------------

package main

import "fmt"
func main() {
  fmt.Println("hello world")
}


// 2. Tests ----------------------------------

// Values
fmt.Println("go" + "lang")
fmt.Println("1+1 =", 1+1)
fmt.Println("7.0/3.0 =", 7.0/3.0)
fmt.Println(true && false)
fmt.Println(true || false)
fmt.Println(!true)

// Variables
var a string = "initial"
var b, c int = 1, 2
var d = true
var e int
f := "short"

// Constants
const n = 500000000
const d = 3e20 / n

// For
for j := 7; j <= 9; j++ {
  fmt.Println(j)
}

// If/Else
if 7%2 == 0 {
  fmt.Println("7 is even")
} else {
  fmt.Println("7 is odd")
}

// Array
b := [5]int{1, 2, 3, 4, 5}
fmt.Println("dcl:", b)

// Function
func main() {
  res := plus(1, 2)
  fmt.Println("1+2 =", res)

  res = plusPlus(1, 2, 3)
  fmt.Println("1+2+3 =", res)
}
