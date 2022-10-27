
# 1. Example ----------------------------

CFLAGS ?= -g

all: helloworld

helloworld: helloworld.o
  # Commands start with TAB not spaces
  $(CC) $(LDFLAGS) -o $@ $^

helloworld.o: helloworld.c
  $(CC) $(CFLAGS) -c -o $@ $<

clean: FRC
  rm -f helloworld helloworld.o


# 2. Tests ----------------------------
