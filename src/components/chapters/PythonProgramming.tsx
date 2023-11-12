import React from "react";
import Chapter from "../Chapter";
import Code from "../Code";
import NumPy from "./NumPy";

function PythonProgramming() {
    return (
        <Chapter title="Python Programming" depth={1}>
            <p>
                This chapter gives an overview over basic python concepts and an introduction to machine learning
                and linear algebra libraries like numpy or scikit learn. Let's have a look at vanilla python though before
                we jump into any libraries. The first thing you might encounter when creating a new python project is the
                following bit of code:
            </p>
            <Code>
                {
                    "if __name__ == '__main__':\n" +
                    "   print('Hello, world!')"
                }
            </Code>
            <p>
                When python runs it script, it sets some variables. One of these is __name__. By default this variable
                gets set the the name of the file minus the file extension. So if we were to import our python file
                from somewhere else this header guard prevents our code from running because the values of __name__ is
                only '__main__' when we are running the file directly (as opposed to through an import). This allows us
                to define code to run when a python file executed but also use the same file as a module and import it
                in other files without executing that code.
            </p>
            <p>
                Python has a really interesting way to index arrays. It allows you not only to index single elements but
                also to select ranges with a start index (inclusive) and an end index (exclusive). It also let's you
                select every n-th element. Have a look at this example:
            </p>
            <Code>
                {
                    "helloString = \"Hello, world! I'm a snake!\"\n" +
                    "print(helloString[1])       # e\n" +
                    "print(helloString[2:5])     # llo\n" +
                    "print(helloString[2:])      # llo, world! I'm a snake!\n" +
                    "print(helloString[:5])      # Hello\n" +
                    "print(helloString[::3])     # Hl r!'ane\n" +
                    "print(helloString[3:10:2])  # l,wr"
                }
            </Code>
            <p>
                An important aspect of vanilla python are list, tuples, dictionaries, and sets. If you program in python
                rarely, these are easy to confuse because they have similar syntax and similar functions but differ in
                some important aspects.
            </p>
            <p>
                Let's start with lists. These functions like the Array data structure in C++. We can insert or append
                elements and access them with an integer index. A list can contain duplicate elements.
            </p>
            <Code>
                {
                    "# Lists\n" +
                    "fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']\n" +
                    "print(fruits[6])  # banana\n" +
                    "print(fruits[7])  # error\n" +
                    "fruits.append('mango')\n" +
                    "print(fruits[7])  # mango"
                }
            </Code>
            <p>
                Next, we have dictionaries. These are Hashmaps which can have indexes of different types. Just likes
                lists we can add and remove items dynamically.
            </p>
            <Code>
                {
                    "# Dictionaries\n" +
                    "fruits = {5: 'orange', 'apple': 'red', 'pear': 'green'}\n" +
                    "print(fruits['apple'])  # red\n" +
                    "print(fruits[5])  # orange\n" +
                    "fruits['banana'] = 'yellow'\n" +
                    "print(fruits['banana'])  # yellow"
                }
            </Code>
            <p>
                Just like dictionaries, sets also use the curly brace syntax but only hold individual values and no
                key-value pairs. We can't change the items in a set but we can add or remove them as well as perform
                typical mathematical set operations.
            </p>
            <Code>
                {
                    "# Sets\n" +
                    "fruits = {'orange', 'apple', 'pear', 91, 'apple'}\n" +
                    "print(fruits)                   # {'pear', 91, 'orange', 'apple'}\n" +
                    "print(91 in fruits)             # True\n" +
                    "print('pear' in fruits)         # True\n" +
                    "print('starfruit' in fruits)    # False"
                }
            </Code>
            <p>
                Last but not least, we have tuples. These function much in the same ways that lists do but they are immutable.
            </p>
            <Code>
                {
                    "# Tuples\n" +
                    "fruits = ('orange', 'apple', 'pear', 91, 'apple')\n" +
                    "print(fruits)                   # {'pear', 91, 'orange', 'apple'}\n" +
                    "print(91 in fruits)             # True\n" +
                    "print('pear' in fruits)         # True\n" +
                    "print('starfruit' in fruits)    # False\n" +
                    "print(fruits[0])                # orange\n" +
                    "print(fruits[1])                # apple\n" +
                    "print(fruits[4])                # apple"
                }
            </Code>
            <p>
                Another very cool feature of python are keyword arguments. These allow us to pass arguments to our function
                by name rather than by position. This allows us to write code similar to how we pass arguments inside
                objects in javascript but with out the need for the object syntax.
            </p>
            <Code>
                {
                    "def printText(text: str, times: int):\n" +
                    "    print(text * times)\n" +
                    "\n" +
                    "if __name__ == '__main__':\n" +
                    "    printText('Hello', 5)\n" +
                    "    printText(times=5, text='Hello')"
                }
            </Code>
            <p>
                Note: here we can also see another feature which is that we can concatenate a string with itself n amount
                of times with the (str * int) operator.
            </p>
            <p>
                Let's talk about python's import ecosystem. You can use "import filename" or "from filename import function" to
                import something from a module. In python modules are actually smaller units of code that get organized
                into "packages" (like npm packages). A package in python needs a "__init__.py" file. The following is an
                excerpt from the python docs: Python defines two types of packages, regular packages and namespace packages.
                Regular packages are traditional packages as they existed in Python 3.2 and earlier. A regular package is
                typically implemented as a directory containing an __init__.py file. When a regular package is imported,
                this __init__.py file is implicitly executed, and the objects it defines are bound to names in the package’s
                namespace. The __init__.py file can contain the same Python code that any other module can contain, and
                Python will add some additional attributes to the module when it is imported.
            </p>
            <NumPy/>
        </Chapter>
    )
}

export default PythonProgramming;