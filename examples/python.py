
# 1. Example ------------------------

@requires_authorization(roles=["ADMIN"])

import unittest
def median(pool):
    copy = sorted(pool)
    size = len(copy)
    if size % 2 == 1:
        return copy[(size - 1) / 2]
    else:
        return (copy[size/2 - 1] + copy[size/2]) / 2
class TestMedian(unittest.TestCase):
    def testMedian(self):
        self.failUnlessEqual(median([2, 9, 9, 7, 9, 2, 4, 5, 8]), 7)
if __name__ == '__main__':
    unittest.main()


# 2. Tests ------------------------





#!/usr/bin/python

# Function definition is here
def printme( str ):
   "This prints a passed string into this function"
   print str
   return;

# Now you can call printme function
printme()
printme("Again second call to the same function")



def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)
    #self
    self.error = MDText()
    self.add_widget(self.error, canvas='after')

    def on_focus(self, _, value):
        pass
        #self

class FloatingAction(Factory.IconButton):
    action = ObjectProperty(allownone=True)

    def show(self, *args):
        Clock.schedule_once(self._show, 0)

    def _show(self, *args):
        Animation.cancel_all(self)
        Animation(font_size=self.target_font_size),
                  d=0.1,
                  t='linear').start(self)

    def hide(self, *args):
        Animation.cancel_all(self)
        Animation(font_size=0, d=0.2, t='linear').start(self)



# Issue
# https://github.com/atom/solarized-dark-syntax/issues/84

class MovieSearchBar(Gtk.Box):
    def __init__(self, location):
        Gtk.Box.__init__(self, orientation = Gtk.Orientation.HORIZONTAL)

        self.genres = []
        self.friends = []
        self.rating = 0
        self.db = Database(location)
